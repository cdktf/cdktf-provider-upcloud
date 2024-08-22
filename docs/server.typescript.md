# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-upcloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-upcloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server upcloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.Server.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.Server(scope: Construct, id: string, config: ServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerConfig">ServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.server.Server.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerConfig">ServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putLogin">putLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putSimpleBackup">putSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putStorageDevices">putStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMem">resetMem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetNicModel">resetNicModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetPlan">resetPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetServerGroup">resetServerGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetSimpleBackup">resetSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetStorageDevices">resetStorageDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.resetVideoModel">resetVideoModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.Server.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.server.Server.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.server.Server.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.server.Server.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.server.Server.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.server.Server.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.server.Server.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.server.Server.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.server.Server.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.server.Server.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.server.Server.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.server.Server.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogin` <a name="putLogin" id="@cdktf/provider-upcloud.server.Server.putLogin"></a>

```typescript
public putLogin(value: ServerLogin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | ServerNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]

---

##### `putSimpleBackup` <a name="putSimpleBackup" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup"></a>

```typescript
public putSimpleBackup(value: ServerSimpleBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putSimpleBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---

##### `putStorageDevices` <a name="putStorageDevices" id="@cdktf/provider-upcloud.server.Server.putStorageDevices"></a>

```typescript
public putStorageDevices(value: IResolvable | ServerStorageDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putStorageDevices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-upcloud.server.Server.putTemplate"></a>

```typescript
public putTemplate(value: ServerTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.Server.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---

##### `resetBootOrder` <a name="resetBootOrder" id="@cdktf/provider-upcloud.server.Server.resetBootOrder"></a>

```typescript
public resetBootOrder(): void
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-upcloud.server.Server.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-upcloud.server.Server.resetFirewall"></a>

```typescript
public resetFirewall(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-upcloud.server.Server.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.server.Server.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-upcloud.server.Server.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-upcloud.server.Server.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetMem` <a name="resetMem" id="@cdktf/provider-upcloud.server.Server.resetMem"></a>

```typescript
public resetMem(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-upcloud.server.Server.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNicModel` <a name="resetNicModel" id="@cdktf/provider-upcloud.server.Server.resetNicModel"></a>

```typescript
public resetNicModel(): void
```

##### `resetPlan` <a name="resetPlan" id="@cdktf/provider-upcloud.server.Server.resetPlan"></a>

```typescript
public resetPlan(): void
```

##### `resetServerGroup` <a name="resetServerGroup" id="@cdktf/provider-upcloud.server.Server.resetServerGroup"></a>

```typescript
public resetServerGroup(): void
```

##### `resetSimpleBackup` <a name="resetSimpleBackup" id="@cdktf/provider-upcloud.server.Server.resetSimpleBackup"></a>

```typescript
public resetSimpleBackup(): void
```

##### `resetStorageDevices` <a name="resetStorageDevices" id="@cdktf/provider-upcloud.server.Server.resetStorageDevices"></a>

```typescript
public resetStorageDevices(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-upcloud.server.Server.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-upcloud.server.Server.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-upcloud.server.Server.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.server.Server.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-upcloud.server.Server.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVideoModel` <a name="resetVideoModel" id="@cdktf/provider-upcloud.server.Server.resetVideoModel"></a>

```typescript
public resetVideoModel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.server.Server.isConstruct"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

server.Server.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.server.Server.isTerraformElement"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

server.Server.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.server.Server.isTerraformResource"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

server.Server.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

server.Server.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Server to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Server that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Server to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackup">simpleBackup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevices">storageDevices</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrderInput">bootOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewallInput">firewallInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostInput">hostInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.loginInput">loginInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.memInput">memInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadataInput">metadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModelInput">nicModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroupInput">serverGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.simpleBackupInput">simpleBackupInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.storageDevicesInput">storageDevicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModelInput">videoModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.bootOrder">bootOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.firewall">firewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.host">host</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.mem">mem</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.metadata">metadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.nicModel">nicModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.serverGroup">serverGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.videoModel">videoModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.server.Server.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.server.Server.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.Server.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.server.Server.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.server.Server.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.server.Server.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.server.Server.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.Server.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.Server.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.server.Server.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.server.Server.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.Server.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.Server.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.Server.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-upcloud.server.Server.property.login"></a>

```typescript
public readonly login: ServerLoginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference">ServerLoginOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-upcloud.server.Server.property.networkInterface"></a>

```typescript
public readonly networkInterface: ServerNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList">ServerNetworkInterfaceList</a>

---

##### `simpleBackup`<sup>Required</sup> <a name="simpleBackup" id="@cdktf/provider-upcloud.server.Server.property.simpleBackup"></a>

```typescript
public readonly simpleBackup: ServerSimpleBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference">ServerSimpleBackupOutputReference</a>

---

##### `storageDevices`<sup>Required</sup> <a name="storageDevices" id="@cdktf/provider-upcloud.server.Server.property.storageDevices"></a>

```typescript
public readonly storageDevices: ServerStorageDevicesList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList">ServerStorageDevicesList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-upcloud.server.Server.property.template"></a>

```typescript
public readonly template: ServerTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference">ServerTemplateOutputReference</a>

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-upcloud.server.Server.property.bootOrderInput"></a>

```typescript
public readonly bootOrderInput: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-upcloud.server.Server.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-upcloud.server.Server.property.firewallInput"></a>

```typescript
public readonly firewallInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-upcloud.server.Server.property.hostInput"></a>

```typescript
public readonly hostInput: number;
```

- *Type:* number

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-upcloud.server.Server.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.server.Server.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-upcloud.server.Server.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-upcloud.server.Server.property.loginInput"></a>

```typescript
public readonly loginInput: ServerLogin;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---

##### `memInput`<sup>Optional</sup> <a name="memInput" id="@cdktf/provider-upcloud.server.Server.property.memInput"></a>

```typescript
public readonly memInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-upcloud.server.Server.property.metadataInput"></a>

```typescript
public readonly metadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-upcloud.server.Server.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | ServerNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]

---

##### `nicModelInput`<sup>Optional</sup> <a name="nicModelInput" id="@cdktf/provider-upcloud.server.Server.property.nicModelInput"></a>

```typescript
public readonly nicModelInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.server.Server.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `serverGroupInput`<sup>Optional</sup> <a name="serverGroupInput" id="@cdktf/provider-upcloud.server.Server.property.serverGroupInput"></a>

```typescript
public readonly serverGroupInput: string;
```

- *Type:* string

---

##### `simpleBackupInput`<sup>Optional</sup> <a name="simpleBackupInput" id="@cdktf/provider-upcloud.server.Server.property.simpleBackupInput"></a>

```typescript
public readonly simpleBackupInput: ServerSimpleBackup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---

##### `storageDevicesInput`<sup>Optional</sup> <a name="storageDevicesInput" id="@cdktf/provider-upcloud.server.Server.property.storageDevicesInput"></a>

```typescript
public readonly storageDevicesInput: IResolvable | ServerStorageDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-upcloud.server.Server.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-upcloud.server.Server.property.templateInput"></a>

```typescript
public readonly templateInput: ServerTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-upcloud.server.Server.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.server.Server.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-upcloud.server.Server.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `videoModelInput`<sup>Optional</sup> <a name="videoModelInput" id="@cdktf/provider-upcloud.server.Server.property.videoModelInput"></a>

```typescript
public readonly videoModelInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-upcloud.server.Server.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-upcloud.server.Server.property.bootOrder"></a>

```typescript
public readonly bootOrder: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.Server.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.Server.property.firewall"></a>

```typescript
public readonly firewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-upcloud.server.Server.property.host"></a>

```typescript
public readonly host: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.Server.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.Server.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-upcloud.server.Server.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mem`<sup>Required</sup> <a name="mem" id="@cdktf/provider-upcloud.server.Server.property.mem"></a>

```typescript
public readonly mem: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.Server.property.metadata"></a>

```typescript
public readonly metadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nicModel`<sup>Required</sup> <a name="nicModel" id="@cdktf/provider-upcloud.server.Server.property.nicModel"></a>

```typescript
public readonly nicModel: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.Server.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `serverGroup`<sup>Required</sup> <a name="serverGroup" id="@cdktf/provider-upcloud.server.Server.property.serverGroup"></a>

```typescript
public readonly serverGroup: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-upcloud.server.Server.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.Server.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.Server.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-upcloud.server.Server.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `videoModel`<sup>Required</sup> <a name="videoModel" id="@cdktf/provider-upcloud.server.Server.property.videoModel"></a>

```typescript
public readonly videoModel: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.Server.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.server.Server.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-upcloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerConfig.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverConfig: server.ServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.hostname">hostname</a></code> | <code>string</code> | A valid domain name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.zone">zone</a></code> | <code>string</code> | The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder">bootOrder</a></code> | <code>string</code> | The boot device order, `cdrom`\|`disk`\|`network` or comma separated combination of those values. Defaults to `disk`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.cpu">cpu</a></code> | <code>number</code> | The number of CPU for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.firewall">firewall</a></code> | <code>boolean \| cdktf.IResolvable</code> | Are firewall rules active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.host">host</a></code> | <code>number</code> | Use this to start the VM on a specific host. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User defined key-value pairs to classify the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.login">login</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | login block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.mem">mem</a></code> | <code>number</code> | The size of memory for the server (in megabytes). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.metadata">metadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the metadata service active for the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.nicModel">nicModel</a></code> | <code>string</code> | The model of the server's network interfaces. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.plan">plan</a></code> | <code>string</code> | The pricing plan used for the server. You can list available server plans with `upctl server plans`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup">serverGroup</a></code> | <code>string</code> | The UUID of a server group to attach this server to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup">simpleBackup</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | simple_backup block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices">storageDevices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]</code> | storage_devices block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.tags">tags</a></code> | <code>string[]</code> | The server related tags. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.timezone">timezone</a></code> | <code>string</code> | A timezone identifier, e.g. `Europe/Helsinki`. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.title">title</a></code> | <code>string</code> | A short, informational description. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.userData">userData</a></code> | <code>string</code> | Defines URL for a server setup script, or the script body itself. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerConfig.property.videoModel">videoModel</a></code> | <code>string</code> | The model of the server's video interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.server.ServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.server.ServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.server.ServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.server.ServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.server.ServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.server.ServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.server.ServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-upcloud.server.ServerConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

A valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#hostname Server#hostname}

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-upcloud.server.ServerConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | ServerNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#network_interface Server#network_interface}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-upcloud.server.ServerConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone in which the server will be hosted, e.g. `de-fra1`. You can list available zones with `upctl zone list`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#zone Server#zone}

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-upcloud.server.ServerConfig.property.bootOrder"></a>

```typescript
public readonly bootOrder: string;
```

- *Type:* string

The boot device order, `cdrom`|`disk`|`network` or comma separated combination of those values. Defaults to `disk`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#boot_order Server#boot_order}

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-upcloud.server.ServerConfig.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

The number of CPU for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#cpu Server#cpu}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-upcloud.server.ServerConfig.property.firewall"></a>

```typescript
public readonly firewall: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Are firewall rules active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#firewall Server#firewall}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-upcloud.server.ServerConfig.property.host"></a>

```typescript
public readonly host: number;
```

- *Type:* number

Use this to start the VM on a specific host.

Refers to value from host -attribute. Only available for private cloud hosts

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#host Server#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.server.ServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-upcloud.server.ServerConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined key-value pairs to classify the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#labels Server#labels}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-upcloud.server.ServerConfig.property.login"></a>

```typescript
public readonly login: ServerLogin;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#login Server#login}

---

##### `mem`<sup>Optional</sup> <a name="mem" id="@cdktf/provider-upcloud.server.ServerConfig.property.mem"></a>

```typescript
public readonly mem: number;
```

- *Type:* number

The size of memory for the server (in megabytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#mem Server#mem}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-upcloud.server.ServerConfig.property.metadata"></a>

```typescript
public readonly metadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the metadata service active for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#metadata Server#metadata}

---

##### `nicModel`<sup>Optional</sup> <a name="nicModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.nicModel"></a>

```typescript
public readonly nicModel: string;
```

- *Type:* string

The model of the server's network interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#nic_model Server#nic_model}

---

##### `plan`<sup>Optional</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

The pricing plan used for the server. You can list available server plans with `upctl server plans`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#plan Server#plan}

---

##### `serverGroup`<sup>Optional</sup> <a name="serverGroup" id="@cdktf/provider-upcloud.server.ServerConfig.property.serverGroup"></a>

```typescript
public readonly serverGroup: string;
```

- *Type:* string

The UUID of a server group to attach this server to.

Note that the server can also be attached to a server group via the `members` property of `upcloud_server_group`. Only one of the these should be defined at a time. This value is only updated if it has been set to non-zero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#server_group Server#server_group}

---

##### `simpleBackup`<sup>Optional</sup> <a name="simpleBackup" id="@cdktf/provider-upcloud.server.ServerConfig.property.simpleBackup"></a>

```typescript
public readonly simpleBackup: ServerSimpleBackup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

simple_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#simple_backup Server#simple_backup}

---

##### `storageDevices`<sup>Optional</sup> <a name="storageDevices" id="@cdktf/provider-upcloud.server.ServerConfig.property.storageDevices"></a>

```typescript
public readonly storageDevices: IResolvable | ServerStorageDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]

storage_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#storage_devices Server#storage_devices}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-upcloud.server.ServerConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The server related tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#tags Server#tags}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-upcloud.server.ServerConfig.property.template"></a>

```typescript
public readonly template: ServerTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#template Server#template}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-upcloud.server.ServerConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

A timezone identifier, e.g. `Europe/Helsinki`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#timezone Server#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A short, informational description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#title Server#title}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-upcloud.server.ServerConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Defines URL for a server setup script, or the script body itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#user_data Server#user_data}

---

##### `videoModel`<sup>Optional</sup> <a name="videoModel" id="@cdktf/provider-upcloud.server.ServerConfig.property.videoModel"></a>

```typescript
public readonly videoModel: string;
```

- *Type:* string

The model of the server's video interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#video_model Server#video_model}

---

### ServerLogin <a name="ServerLogin" id="@cdktf/provider-upcloud.server.ServerLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerLogin.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverLogin: server.ServerLogin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.createPassword">createPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates a password should be create to allow access. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.keys">keys</a></code> | <code>string[]</code> | A list of ssh keys to access the server. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery">passwordDelivery</a></code> | <code>string</code> | The delivery method for the server's root password (one of `none`, `email` or `sms`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLogin.property.user">user</a></code> | <code>string</code> | Username to be create to access the server. |

---

##### `createPassword`<sup>Optional</sup> <a name="createPassword" id="@cdktf/provider-upcloud.server.ServerLogin.property.createPassword"></a>

```typescript
public readonly createPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates a password should be create to allow access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#create_password Server#create_password}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLogin.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

A list of ssh keys to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#keys Server#keys}

---

##### `passwordDelivery`<sup>Optional</sup> <a name="passwordDelivery" id="@cdktf/provider-upcloud.server.ServerLogin.property.passwordDelivery"></a>

```typescript
public readonly passwordDelivery: string;
```

- *Type:* string

The delivery method for the server's root password (one of `none`, `email` or `sms`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#password_delivery Server#password_delivery}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLogin.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Username to be create to access the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#user Server#user}

---

### ServerNetworkInterface <a name="ServerNetworkInterface" id="@cdktf/provider-upcloud.server.ServerNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverNetworkInterface: server.ServerNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type">type</a></code> | <code>string</code> | Network interface type. For private network interfaces, a network must be specified with an existing network id. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress">additionalIpAddress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]</code> | additional_ip_address block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | `true` if this interface should be used for network booting. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress">ipAddress</a></code> | <code>string</code> | The assigned primary IP address. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily">ipAddressFamily</a></code> | <code>string</code> | The type of the primary IP address of this interface (one of `IPv4` or `IPv6`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network">network</a></code> | <code>string</code> | The unique ID of a network to attach this network to. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering">sourceIpFiltering</a></code> | <code>boolean \| cdktf.IResolvable</code> | `true` if source IP should be filtered. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Network interface type. For private network interfaces, a network must be specified with an existing network id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#type Server#type}

---

##### `additionalIpAddress`<sup>Optional</sup> <a name="additionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.additionalIpAddress"></a>

```typescript
public readonly additionalIpAddress: IResolvable | ServerNetworkInterfaceAdditionalIpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]

additional_ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#additional_ip_address Server#additional_ip_address}

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

`true` if this interface should be used for network booting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#bootable Server#bootable}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The assigned primary IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#ip_address Server#ip_address}

---

##### `ipAddressFamily`<sup>Optional</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.ipAddressFamily"></a>

```typescript
public readonly ipAddressFamily: string;
```

- *Type:* string

The type of the primary IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#ip_address_family Server#ip_address_family}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The unique ID of a network to attach this network to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#network Server#network}

---

##### `sourceIpFiltering`<sup>Optional</sup> <a name="sourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterface.property.sourceIpFiltering"></a>

```typescript
public readonly sourceIpFiltering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

`true` if source IP should be filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#source_ip_filtering Server#source_ip_filtering}

---

### ServerNetworkInterfaceAdditionalIpAddress <a name="ServerNetworkInterfaceAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverNetworkInterfaceAdditionalIpAddress: server.ServerNetworkInterfaceAdditionalIpAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress">ipAddress</a></code> | <code>string</code> | The assigned additional IP address. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily">ipAddressFamily</a></code> | <code>string</code> | The type of this additional IP address of this interface (one of `IPv4` or `IPv6`). |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The assigned additional IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#ip_address Server#ip_address}

---

##### `ipAddressFamily`<sup>Optional</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress.property.ipAddressFamily"></a>

```typescript
public readonly ipAddressFamily: string;
```

- *Type:* string

The type of this additional IP address of this interface (one of `IPv4` or `IPv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#ip_address_family Server#ip_address_family}

---

### ServerSimpleBackup <a name="ServerSimpleBackup" id="@cdktf/provider-upcloud.server.ServerSimpleBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverSimpleBackup: server.ServerSimpleBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan">plan</a></code> | <code>string</code> | Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time">time</a></code> | <code>string</code> | Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230). |

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Simple backup plan. Accepted values: daily, dailies, weeklies, monthlies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#plan Server#plan}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackup.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Time of the day at which backup will be taken. Should be provided in a hhmm format (e.g. 2230).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#time Server#time}

---

### ServerStorageDevices <a name="ServerStorageDevices" id="@cdktf/provider-upcloud.server.ServerStorageDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerStorageDevices.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverStorageDevices: server.ServerStorageDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage">storage</a></code> | <code>string</code> | A valid storage UUID. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.address">address</a></code> | <code>string</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition">addressPosition</a></code> | <code>string</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevices.property.type">type</a></code> | <code>string</code> | The device type the storage will be attached as. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

A valid storage UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#storage Server#storage}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#address Server#address}

---

##### `addressPosition`<sup>Optional</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.addressPosition"></a>

```typescript
public readonly addressPosition: string;
```

- *Type:* string

The device position in the given bus (defined via field `address`).

Valid values for address `virtio` are `0-15` (`0`, for example). Valid values for `scsi` or `ide` are `0-1:0-1` (`0:0`, for example). Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#address_position Server#address_position}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevices.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The device type the storage will be attached as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#type Server#type}

---

### ServerTemplate <a name="ServerTemplate" id="@cdktf/provider-upcloud.server.ServerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplate.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverTemplate: server.ServerTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.storage">storage</a></code> | <code>string</code> | A valid storage UUID or template name. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.address">address</a></code> | <code>string</code> | The device address the storage will be attached to (`scsi`\|`virtio`\|`ide`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition">addressPosition</a></code> | <code>string</code> | The device position in the given bus (defined via field `address`). |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule">backupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | backup_rule block. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup">deleteAutoresizeBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt">encrypt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Sets if the storage is encrypted at rest. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize">filesystemAutoresize</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.size">size</a></code> | <code>number</code> | The size of the storage in gigabytes. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate.property.title">title</a></code> | <code>string</code> | A short, informative description. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplate.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

A valid storage UUID or template name.

You can list available public templates with `upctl storage list --public --template` and available private templates with `upctl storage list --template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#storage Server#storage}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplate.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The device address the storage will be attached to (`scsi`|`virtio`|`ide`).

Leave `address_position` field empty to auto-select next available address from that bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#address Server#address}

---

##### `addressPosition`<sup>Optional</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerTemplate.property.addressPosition"></a>

```typescript
public readonly addressPosition: string;
```

- *Type:* string

The device position in the given bus (defined via field `address`).

For example `0:0`, or `0`. Leave empty to auto-select next available address in the given bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#address_position Server#address_position}

---

##### `backupRule`<sup>Optional</sup> <a name="backupRule" id="@cdktf/provider-upcloud.server.ServerTemplate.property.backupRule"></a>

```typescript
public readonly backupRule: ServerTemplateBackupRule;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

backup_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#backup_rule Server#backup_rule}

---

##### `deleteAutoresizeBackup`<sup>Optional</sup> <a name="deleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplate.property.deleteAutoresizeBackup"></a>

```typescript
public readonly deleteAutoresizeBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the backup taken before the partition and filesystem resize attempt will be deleted immediately after success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#delete_autoresize_backup Server#delete_autoresize_backup}

---

##### `encrypt`<sup>Optional</sup> <a name="encrypt" id="@cdktf/provider-upcloud.server.ServerTemplate.property.encrypt"></a>

```typescript
public readonly encrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Sets if the storage is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#encrypt Server#encrypt}

---

##### `filesystemAutoresize`<sup>Optional</sup> <a name="filesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplate.property.filesystemAutoresize"></a>

```typescript
public readonly filesystemAutoresize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, provider will attempt to resize partition and filesystem when the size of template storage changes.

Please note that before the resize attempt is made, backup of the storage will be taken. If the resize attempt fails, the backup will be used
							to restore the storage and then deleted. If the resize attempt succeeds, backup will be kept (unless delete_autoresize_backup option is set to true).
							Taking and keeping backups incure costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#filesystem_autoresize Server#filesystem_autoresize}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplate.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the storage in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#size Server#size}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplate.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A short, informative description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#title Server#title}

---

### ServerTemplateBackupRule <a name="ServerTemplateBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

const serverTemplateBackupRule: server.ServerTemplateBackupRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval">interval</a></code> | <code>string</code> | The weekday when the backup is created. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention">retention</a></code> | <code>number</code> | The number of days before a backup is automatically deleted. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time">time</a></code> | <code>string</code> | The time of day when the backup is created. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

The weekday when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#interval Server#interval}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

The number of days before a backup is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#retention Server#retention}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

The time of day when the backup is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.10.1/docs/resources/server#time Server#time}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLoginOutputReference <a name="ServerLoginOutputReference" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerLoginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword">resetCreatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys">resetKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery">resetPasswordDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreatePassword` <a name="resetCreatePassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetCreatePassword"></a>

```typescript
public resetCreatePassword(): void
```

##### `resetKeys` <a name="resetKeys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetKeys"></a>

```typescript
public resetKeys(): void
```

##### `resetPasswordDelivery` <a name="resetPasswordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetPasswordDelivery"></a>

```typescript
public resetPasswordDelivery(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput">createPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput">passwordDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword">createPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery">passwordDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createPasswordInput`<sup>Optional</sup> <a name="createPasswordInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPasswordInput"></a>

```typescript
public readonly createPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `passwordDeliveryInput`<sup>Optional</sup> <a name="passwordDeliveryInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDeliveryInput"></a>

```typescript
public readonly passwordDeliveryInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `createPassword`<sup>Required</sup> <a name="createPassword" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.createPassword"></a>

```typescript
public readonly createPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `passwordDelivery`<sup>Required</sup> <a name="passwordDelivery" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.passwordDelivery"></a>

```typescript
public readonly passwordDelivery: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerLoginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServerLogin;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerLogin">ServerLogin</a>

---


### ServerNetworkInterfaceAdditionalIpAddressList <a name="ServerNetworkInterfaceAdditionalIpAddressList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerNetworkInterfaceAdditionalIpAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get"></a>

```typescript
public get(index: number): ServerNetworkInterfaceAdditionalIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerNetworkInterfaceAdditionalIpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]

---


### ServerNetworkInterfaceAdditionalIpAddressOutputReference <a name="ServerNetworkInterfaceAdditionalIpAddressOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerNetworkInterfaceAdditionalIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily">resetIpAddressFamily</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpAddressFamily` <a name="resetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.resetIpAddressFamily"></a>

```typescript
public resetIpAddressFamily(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating">ipAddressFloating</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput">ipAddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily">ipAddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressFloating`<sup>Required</sup> <a name="ipAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFloating"></a>

```typescript
public readonly ipAddressFloating: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipAddressFamilyInput`<sup>Optional</sup> <a name="ipAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamilyInput"></a>

```typescript
public readonly ipAddressFamilyInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressFamily`<sup>Required</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.ipAddressFamily"></a>

```typescript
public readonly ipAddressFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerNetworkInterfaceAdditionalIpAddress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>

---


### ServerNetworkInterfaceList <a name="ServerNetworkInterfaceList" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get"></a>

```typescript
public get(index: number): ServerNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>[]

---


### ServerNetworkInterfaceOutputReference <a name="ServerNetworkInterfaceOutputReference" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress">putAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress">resetAdditionalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily">resetIpAddressFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering">resetSourceIpFiltering</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpAddress` <a name="putAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress"></a>

```typescript
public putAdditionalIpAddress(value: IResolvable | ServerNetworkInterfaceAdditionalIpAddress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.putAdditionalIpAddress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]

---

##### `resetAdditionalIpAddress` <a name="resetAdditionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetAdditionalIpAddress"></a>

```typescript
public resetAdditionalIpAddress(): void
```

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetBootable"></a>

```typescript
public resetBootable(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpAddressFamily` <a name="resetIpAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetIpAddressFamily"></a>

```typescript
public resetIpAddressFamily(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetSourceIpFiltering` <a name="resetSourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.resetSourceIpFiltering"></a>

```typescript
public resetSourceIpFiltering(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress">additionalIpAddress</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating">ipAddressFloating</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput">additionalIpAddressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput">bootableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput">ipAddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput">sourceIpFilteringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily">ipAddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering">sourceIpFiltering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalIpAddress`<sup>Required</sup> <a name="additionalIpAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddress"></a>

```typescript
public readonly additionalIpAddress: ServerNetworkInterfaceAdditionalIpAddressList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddressList">ServerNetworkInterfaceAdditionalIpAddressList</a>

---

##### `ipAddressFloating`<sup>Required</sup> <a name="ipAddressFloating" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFloating"></a>

```typescript
public readonly ipAddressFloating: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `additionalIpAddressInput`<sup>Optional</sup> <a name="additionalIpAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.additionalIpAddressInput"></a>

```typescript
public readonly additionalIpAddressInput: IResolvable | ServerNetworkInterfaceAdditionalIpAddress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterfaceAdditionalIpAddress">ServerNetworkInterfaceAdditionalIpAddress</a>[]

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootableInput"></a>

```typescript
public readonly bootableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddressFamilyInput`<sup>Optional</sup> <a name="ipAddressFamilyInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamilyInput"></a>

```typescript
public readonly ipAddressFamilyInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `sourceIpFilteringInput`<sup>Optional</sup> <a name="sourceIpFilteringInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFilteringInput"></a>

```typescript
public readonly sourceIpFilteringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressFamily`<sup>Required</sup> <a name="ipAddressFamily" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.ipAddressFamily"></a>

```typescript
public readonly ipAddressFamily: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `sourceIpFiltering`<sup>Required</sup> <a name="sourceIpFiltering" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.sourceIpFiltering"></a>

```typescript
public readonly sourceIpFiltering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerNetworkInterface">ServerNetworkInterface</a>

---


### ServerSimpleBackupOutputReference <a name="ServerSimpleBackupOutputReference" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerSimpleBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerSimpleBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServerSimpleBackup;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerSimpleBackup">ServerSimpleBackup</a>

---


### ServerStorageDevicesList <a name="ServerStorageDevicesList" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerStorageDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get"></a>

```typescript
public get(index: number): ServerStorageDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerStorageDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>[]

---


### ServerStorageDevicesOutputReference <a name="ServerStorageDevicesOutputReference" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerStorageDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition">resetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAddressPosition` <a name="resetAddressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetAddressPosition"></a>

```typescript
public resetAddressPosition(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput">addressPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput">storageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition">addressPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage">storage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressPositionInput`<sup>Optional</sup> <a name="addressPositionInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPositionInput"></a>

```typescript
public readonly addressPositionInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressPosition`<sup>Required</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.addressPosition"></a>

```typescript
public readonly addressPosition: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerStorageDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerStorageDevices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.server.ServerStorageDevices">ServerStorageDevices</a>

---


### ServerTemplateBackupRuleOutputReference <a name="ServerTemplateBackupRuleOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerTemplateBackupRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput">retentionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention">retention</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retentionInput"></a>

```typescript
public readonly retentionInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServerTemplateBackupRule;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---


### ServerTemplateOutputReference <a name="ServerTemplateOutputReference" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer"></a>

```typescript
import { server } from '@cdktf/provider-upcloud'

new server.ServerTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule">putBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition">resetAddressPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule">resetBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup">resetDeleteAutoresizeBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt">resetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize">resetFilesystemAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupRule` <a name="putBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule"></a>

```typescript
public putBackupRule(value: ServerTemplateBackupRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.putBackupRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAddressPosition` <a name="resetAddressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetAddressPosition"></a>

```typescript
public resetAddressPosition(): void
```

##### `resetBackupRule` <a name="resetBackupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetBackupRule"></a>

```typescript
public resetBackupRule(): void
```

##### `resetDeleteAutoresizeBackup` <a name="resetDeleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetDeleteAutoresizeBackup"></a>

```typescript
public resetDeleteAutoresizeBackup(): void
```

##### `resetEncrypt` <a name="resetEncrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetEncrypt"></a>

```typescript
public resetEncrypt(): void
```

##### `resetFilesystemAutoresize` <a name="resetFilesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetFilesystemAutoresize"></a>

```typescript
public resetFilesystemAutoresize(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule">backupRule</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput">addressPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput">backupRuleInput</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput">deleteAutoresizeBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput">encryptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput">filesystemAutoresizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput">storageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition">addressPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup">deleteAutoresizeBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt">encrypt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize">filesystemAutoresize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage">storage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRule`<sup>Required</sup> <a name="backupRule" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRule"></a>

```typescript
public readonly backupRule: ServerTemplateBackupRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRuleOutputReference">ServerTemplateBackupRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressPositionInput`<sup>Optional</sup> <a name="addressPositionInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPositionInput"></a>

```typescript
public readonly addressPositionInput: string;
```

- *Type:* string

---

##### `backupRuleInput`<sup>Optional</sup> <a name="backupRuleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.backupRuleInput"></a>

```typescript
public readonly backupRuleInput: ServerTemplateBackupRule;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplateBackupRule">ServerTemplateBackupRule</a>

---

##### `deleteAutoresizeBackupInput`<sup>Optional</sup> <a name="deleteAutoresizeBackupInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackupInput"></a>

```typescript
public readonly deleteAutoresizeBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptInput`<sup>Optional</sup> <a name="encryptInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encryptInput"></a>

```typescript
public readonly encryptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filesystemAutoresizeInput`<sup>Optional</sup> <a name="filesystemAutoresizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresizeInput"></a>

```typescript
public readonly filesystemAutoresizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressPosition`<sup>Required</sup> <a name="addressPosition" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.addressPosition"></a>

```typescript
public readonly addressPosition: string;
```

- *Type:* string

---

##### `deleteAutoresizeBackup`<sup>Required</sup> <a name="deleteAutoresizeBackup" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.deleteAutoresizeBackup"></a>

```typescript
public readonly deleteAutoresizeBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.encrypt"></a>

```typescript
public readonly encrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filesystemAutoresize`<sup>Required</sup> <a name="filesystemAutoresize" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.filesystemAutoresize"></a>

```typescript
public readonly filesystemAutoresize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.storage"></a>

```typescript
public readonly storage: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.server.ServerTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServerTemplate;
```

- *Type:* <a href="#@cdktf/provider-upcloud.server.ServerTemplate">ServerTemplate</a>

---



