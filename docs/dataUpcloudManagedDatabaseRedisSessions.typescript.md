# `dataUpcloudManagedDatabaseRedisSessions` Submodule <a name="`dataUpcloudManagedDatabaseRedisSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseRedisSessions <a name="DataUpcloudManagedDatabaseRedisSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions upcloud_managed_database_redis_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions(scope: Construct, id: string, config: DataUpcloudManagedDatabaseRedisSessionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions"></a>

```typescript
public putSessions(value: IResolvable | DataUpcloudManagedDatabaseRedisSessionsSessions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions"></a>

```typescript
public resetSessions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabaseRedisSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabaseRedisSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseRedisSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput">sessionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions"></a>

```typescript
public readonly sessions: DataUpcloudManagedDatabaseRedisSessionsSessionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput"></a>

```typescript
public readonly sessionsInput: IResolvable | DataUpcloudManagedDatabaseRedisSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseRedisSessionsConfig <a name="DataUpcloudManagedDatabaseRedisSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseRedisSessionsConfig: dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit">limit</a></code> | <code>number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset">offset</a></code> | <code>number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order">order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions">sessions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#service DataUpcloudManagedDatabaseRedisSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#limit DataUpcloudManagedDatabaseRedisSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#offset DataUpcloudManagedDatabaseRedisSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#order DataUpcloudManagedDatabaseRedisSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions"></a>

```typescript
public readonly sessions: IResolvable | DataUpcloudManagedDatabaseRedisSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.11.2/docs/data-sources/managed_database_redis_sessions#sessions DataUpcloudManagedDatabaseRedisSessions#sessions}

---

### DataUpcloudManagedDatabaseRedisSessionsSessions <a name="DataUpcloudManagedDatabaseRedisSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabaseRedisSessionsSessions: dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseRedisSessionsSessionsList <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseRedisSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>[]

---


### DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabaseRedisSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions">activeChannelSubscriptions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase">activeDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">activePatternMatchingChannelSubscriptions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge">connectionAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle">connectionIdle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags">flags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw">flagsRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands">multiExecCommands</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer">outputBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory">outputBufferMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength">outputListLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer">queryBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree">queryBufferFree</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeChannelSubscriptions`<sup>Required</sup> <a name="activeChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```typescript
public readonly activeChannelSubscriptions: number;
```

- *Type:* number

---

##### `activeDatabase`<sup>Required</sup> <a name="activeDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase"></a>

```typescript
public readonly activeDatabase: string;
```

- *Type:* string

---

##### `activePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="activePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```typescript
public readonly activePatternMatchingChannelSubscriptions: number;
```

- *Type:* number

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr"></a>

```typescript
public readonly clientAddr: string;
```

- *Type:* string

---

##### `connectionAge`<sup>Required</sup> <a name="connectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge"></a>

```typescript
public readonly connectionAge: number;
```

- *Type:* number

---

##### `connectionIdle`<sup>Required</sup> <a name="connectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle"></a>

```typescript
public readonly connectionIdle: number;
```

- *Type:* number

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags"></a>

```typescript
public readonly flags: string[];
```

- *Type:* string[]

---

##### `flagsRaw`<sup>Required</sup> <a name="flagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw"></a>

```typescript
public readonly flagsRaw: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiExecCommands`<sup>Required</sup> <a name="multiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands"></a>

```typescript
public readonly multiExecCommands: number;
```

- *Type:* number

---

##### `outputBuffer`<sup>Required</sup> <a name="outputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer"></a>

```typescript
public readonly outputBuffer: number;
```

- *Type:* number

---

##### `outputBufferMemory`<sup>Required</sup> <a name="outputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory"></a>

```typescript
public readonly outputBufferMemory: number;
```

- *Type:* number

---

##### `outputListLength`<sup>Required</sup> <a name="outputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength"></a>

```typescript
public readonly outputListLength: number;
```

- *Type:* number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryBuffer`<sup>Required</sup> <a name="queryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer"></a>

```typescript
public readonly queryBuffer: number;
```

- *Type:* number

---

##### `queryBufferFree`<sup>Required</sup> <a name="queryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree"></a>

```typescript
public readonly queryBufferFree: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabaseRedisSessionsSessions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions">DataUpcloudManagedDatabaseRedisSessionsSessions</a>

---



