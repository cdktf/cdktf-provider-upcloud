# `dataUpcloudManagedDatabasePostgresqlSessions` Submodule <a name="`dataUpcloudManagedDatabasePostgresqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabasePostgresqlSessions <a name="DataUpcloudManagedDatabasePostgresqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions(scope: Construct, id: string, config: DataUpcloudManagedDatabasePostgresqlSessionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions"></a>

```typescript
public putSessions(value: IResolvable | DataUpcloudManagedDatabasePostgresqlSessionsSessions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions"></a>

```typescript
public resetSessions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput">sessionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions"></a>

```typescript
public readonly sessions: DataUpcloudManagedDatabasePostgresqlSessionsSessionsList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput"></a>

```typescript
public readonly sessionsInput: IResolvable | DataUpcloudManagedDatabasePostgresqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsConfig <a name="DataUpcloudManagedDatabasePostgresqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabasePostgresqlSessionsConfig: dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit">limit</a></code> | <code>number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset">offset</a></code> | <code>number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order">order</a></code> | <code>string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions">sessions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions"></a>

```typescript
public readonly sessions: IResolvable | DataUpcloudManagedDatabasePostgresqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

### DataUpcloudManagedDatabasePostgresqlSessionsSessions <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

const dataUpcloudManagedDatabasePostgresqlSessionsSessions: dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid">backendXid</a></code> | <code>number</code> | Top-level transaction identifier of this service, if any. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin">backendXmin</a></code> | <code>number</code> | The current service's xmin horizon. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname">clientHostname</a></code> | <code>string</code> | Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart">xactStart</a></code> | <code>string</code> | Time when this process' current transaction was started, or null if no transaction is active. |

---

##### `backendXid`<sup>Optional</sup> <a name="backendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid"></a>

```typescript
public readonly backendXid: number;
```

- *Type:* number

Top-level transaction identifier of this service, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}

---

##### `backendXmin`<sup>Optional</sup> <a name="backendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin"></a>

```typescript
public readonly backendXmin: number;
```

- *Type:* number

The current service's xmin horizon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}

---

##### `clientHostname`<sup>Optional</sup> <a name="clientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname"></a>

```typescript
public readonly clientHostname: string;
```

- *Type:* string

Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}

---

##### `xactStart`<sup>Optional</sup> <a name="xactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart"></a>

```typescript
public readonly xactStart: string;
```

- *Type:* string

Time when this process' current transaction was started, or null if no transaction is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/3.3.1/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsSessionsList <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get"></a>

```typescript
public get(index: number): DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabasePostgresqlSessionsSessions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>[]

---


### DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer"></a>

```typescript
import { dataUpcloudManagedDatabasePostgresqlSessions } from '@cdktf/provider-upcloud'

new dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid">resetBackendXid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin">resetBackendXmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname">resetClientHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart">resetXactStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendXid` <a name="resetBackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid"></a>

```typescript
public resetBackendXid(): void
```

##### `resetBackendXmin` <a name="resetBackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin"></a>

```typescript
public resetBackendXmin(): void
```

##### `resetClientHostname` <a name="resetClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname"></a>

```typescript
public resetClientHostname(): void
```

##### `resetXactStart` <a name="resetXactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart"></a>

```typescript
public resetXactStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart">backendStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort">clientPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid">datid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname">datname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration">queryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart">queryStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange">stateChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename">usename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid">usesysid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent">waitEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType">waitEventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput">backendXidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput">backendXminInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput">clientHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput">xactStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid">backendXid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin">backendXmin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname">clientHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart">xactStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `backendStart`<sup>Required</sup> <a name="backendStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart"></a>

```typescript
public readonly backendStart: string;
```

- *Type:* string

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr"></a>

```typescript
public readonly clientAddr: string;
```

- *Type:* string

---

##### `clientPort`<sup>Required</sup> <a name="clientPort" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort"></a>

```typescript
public readonly clientPort: number;
```

- *Type:* number

---

##### `datid`<sup>Required</sup> <a name="datid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid"></a>

```typescript
public readonly datid: number;
```

- *Type:* number

---

##### `datname`<sup>Required</sup> <a name="datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname"></a>

```typescript
public readonly datname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryDuration`<sup>Required</sup> <a name="queryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration"></a>

```typescript
public readonly queryDuration: string;
```

- *Type:* string

---

##### `queryStart`<sup>Required</sup> <a name="queryStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart"></a>

```typescript
public readonly queryStart: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateChange`<sup>Required</sup> <a name="stateChange" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange"></a>

```typescript
public readonly stateChange: string;
```

- *Type:* string

---

##### `usename`<sup>Required</sup> <a name="usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename"></a>

```typescript
public readonly usename: string;
```

- *Type:* string

---

##### `usesysid`<sup>Required</sup> <a name="usesysid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid"></a>

```typescript
public readonly usesysid: number;
```

- *Type:* number

---

##### `waitEvent`<sup>Required</sup> <a name="waitEvent" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent"></a>

```typescript
public readonly waitEvent: string;
```

- *Type:* string

---

##### `waitEventType`<sup>Required</sup> <a name="waitEventType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType"></a>

```typescript
public readonly waitEventType: string;
```

- *Type:* string

---

##### `backendXidInput`<sup>Optional</sup> <a name="backendXidInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput"></a>

```typescript
public readonly backendXidInput: number;
```

- *Type:* number

---

##### `backendXminInput`<sup>Optional</sup> <a name="backendXminInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput"></a>

```typescript
public readonly backendXminInput: number;
```

- *Type:* number

---

##### `clientHostnameInput`<sup>Optional</sup> <a name="clientHostnameInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput"></a>

```typescript
public readonly clientHostnameInput: string;
```

- *Type:* string

---

##### `xactStartInput`<sup>Optional</sup> <a name="xactStartInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput"></a>

```typescript
public readonly xactStartInput: string;
```

- *Type:* string

---

##### `backendXid`<sup>Required</sup> <a name="backendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid"></a>

```typescript
public readonly backendXid: number;
```

- *Type:* number

---

##### `backendXmin`<sup>Required</sup> <a name="backendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin"></a>

```typescript
public readonly backendXmin: number;
```

- *Type:* number

---

##### `clientHostname`<sup>Required</sup> <a name="clientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname"></a>

```typescript
public readonly clientHostname: string;
```

- *Type:* string

---

##### `xactStart`<sup>Required</sup> <a name="xactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart"></a>

```typescript
public readonly xactStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataUpcloudManagedDatabasePostgresqlSessionsSessions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions">DataUpcloudManagedDatabasePostgresqlSessionsSessions</a>

---



